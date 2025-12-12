import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={onCartClick}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;