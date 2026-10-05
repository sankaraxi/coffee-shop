import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DrinkCustomizerModal from './components/DrinkCustomizerModal';
import CartDrawer from './components/CartDrawer';
import OrderSuccessModal from './components/OrderSuccessModal';
import BrewRitualGuide from './components/BrewRitualGuide';
import OriginExplorer from './components/OriginExplorer';
import WorkshopsSection from './components/WorkshopsSection';
import CafeAtmosphere from './components/CafeAtmosphere';
import Footer from './components/Footer';
import { ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const [cartItems, setCartItems] = useState([
    // Pre-populate with 1 delightful house specialty for immediate visual warmth
    {
      id: 'atelier-flat-white',
      name: 'Atelier Velvet Flat White',
      category: 'espresso',
      categoryLabel: 'Espresso Bar',
      cartItemId: 'init-flat-white',
      quantity: 1,
      unitPrice: 5.25,
      customizations: {
        temperature: 'hot',
        size: '6 oz Traditional',
        bean: 'Atelier Signature House Blend',
        milk: 'Minor Figures Oat Milk',
        syrup: null,
        extraShots: null,
        notes: 'In ceramic cup'
      }
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Cart total item count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Open customization modal
  const handleSelectItem = (item) => {
    setCustomizingItem(item);
    setIsCustomizerOpen(true);
  };

  // Quick add standard version
  const handleQuickAdd = (item) => {
    const defaultItem = {
      ...item,
      cartItemId: `${item.id}-quick-${Date.now()}`,
      quantity: 1,
      unitPrice: item.price,
      customizations: {
        temperature: item.category !== 'bakery' && item.category !== 'beans' ? 'hot' : null,
        size: item.sizes?.[0]?.label || 'Standard',
        bean: item.defaultBean ? 'Atelier House Lot' : null,
        milk: (item.category === 'espresso' || item.category === 'specialty') ? 'Organic Whole Milk' : null,
        syrup: null,
        extraShots: null,
        notes: null
      }
    };

    setCartItems(prev => [...prev, defaultItem]);
    showToast(`Added ${item.name} to bag`);
  };

  // Add customized item from modal
  const handleAddCustomizedItem = (customizedItem) => {
    setCartItems(prev => [...prev, customizedItem]);
    showToast(`Added ${customizedItem.name} to bag`);
  };

  // Add whole bean bag from Origin Explorer
  const handleAddBeanBag = (origin) => {
    const bagItem = {
      id: `bag-${origin.id}`,
      name: `${origin.name} (${origin.bagWeight})`,
      category: 'beans',
      categoryLabel: 'Whole Bean Bags',
      cartItemId: `bag-${origin.id}-${Date.now()}`,
      quantity: 1,
      unitPrice: origin.pricePerBag,
      customizations: {
        temperature: null,
        size: origin.bagWeight,
        bean: origin.name,
        milk: null,
        syrup: null,
        extraShots: null,
        notes: `Fresh roast crop: ${origin.harvest}`
      }
    };

    setCartItems(prev => [...prev, bagItem]);
    showToast(`Added ${origin.name} bag to bag`);
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  // Order checkout completed
  const handleCheckoutComplete = (orderData) => {
    setActiveOrder(orderData);
    setCartItems([]); // Clear cart
    setIsCartOpen(false); // Close cart drawer
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#24211E]">
      
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Sections according to tab or scroll */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero
          onExploreMenu={() => {
            setActiveTab('menu');
            const el = document.getElementById('menu-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreOrigins={() => setActiveTab('origins')}
          onOpenRituals={() => setActiveTab('brew-guide')}
        />

        {/* Tab 1: Menu & Ordering System */}
        {activeTab === 'menu' && (
          <>
            <MenuSection
              onSelectItem={handleSelectItem}
              onQuickAdd={handleQuickAdd}
            />
            {/* Contextual link to origins */}
            <section className="bg-[#F5EFE8] py-12 border-t border-[#EAE3D9] text-center">
              <div className="max-w-xl mx-auto px-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9C6237]">Curious about origin terroir?</span>
                <h3 className="text-2xl font-serif font-normal text-[#241E19] mt-1 mb-2">
                  Taste the Soil of Huila &amp; Guji
                </h3>
                <p className="text-xs text-[#6B5E52] mb-5">
                  Explore altitude records, anaerobic honey fermentations, and our direct-trade farmer partnerships.
                </p>
                <button
                  onClick={() => setActiveTab('origins')}
                  className="px-5 py-2.5 bg-[#241E19] text-[#FBF9F5] text-xs font-medium rounded-lg hover:bg-[#3D322B] transition-colors cursor-pointer"
                >
                  Explore Single Origins
                </button>
              </div>
            </section>
          </>
        )}

        {/* Tab 2: Single Origin Explorer */}
        {activeTab === 'origins' && (
          <OriginExplorer
            onAddBeanBag={handleAddBeanBag}
            onSelectDrinkWithBean={() => setActiveTab('menu')}
          />
        )}

        {/* Tab 3: Precision Brew Ritual Guide & Timer */}
        {activeTab === 'brew-guide' && (
          <BrewRitualGuide
            onSelectBeanBag={() => setActiveTab('origins')}
          />
        )}

        {/* Tab 4: Sensory Cupping Workshops & Classes */}
        {activeTab === 'workshops' && (
          <WorkshopsSection />
        )}

        {/* Tab 5: Physical Roastery & Hours */}
        {activeTab === 'cafe' && (
          <CafeAtmosphere />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={setActiveTab} />

      {/* Drink Customization Modal */}
      <DrinkCustomizerModal
        item={customizingItem}
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onAddToCart={handleAddCustomizedItem}
      />

      {/* Slide-out Order Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutComplete={handleCheckoutComplete}
      />

      {/* Live Barista Order Timeline Modal */}
      <OrderSuccessModal
        order={activeOrder}
        onClose={() => setActiveOrder(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#241E19] text-[#FBF9F5] px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-medium animate-in slide-in-from-bottom-3 duration-200 border border-[#3D322A]">
          <Check className="w-4 h-4 text-[#10B981]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[#D5C0A8] underline hover:text-white cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Floating Bag Button for Quick Mobile Access */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-6 md:hidden z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-[#241E19] text-[#FBF9F5] rounded-full shadow-lg border border-[#3D322A] text-xs font-medium active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-4 h-4 text-[#D5C0A8]" />
            <span>Bag</span>
            <span className="font-mono bg-[#9C6237] text-white px-2 py-0.5 rounded-full font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      )}

    </div>
  );
}
