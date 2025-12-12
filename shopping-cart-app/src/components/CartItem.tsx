import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const { dispatch } = useCart();

  const handleUpdateQuantity = (quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
  };

  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 mt-1"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;