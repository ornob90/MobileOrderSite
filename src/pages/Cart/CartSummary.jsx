const CartSummery = () => {
  // console.log(cartTotal);

  return (
    <div className="lg:px-10 mt-10 lg:mt-0">
      
      <div className="pt-4 text-sm text-gray-600 pb-5 ">
        <div className="flex justify-between items-center pb-2">
          <p>Subtotal</p>
          <p>$50</p>
        </div>
        <div className="flex justify-between items-center pb-2">
          <p>Discount</p>
          <p>$ 50</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping Fees</p>
          <p>$50</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-y pb-4">
        <p className="text-3xl md:text-4xl font-poppins font-base">Total</p>
        <p className="text-xl font-poppins font-semibold ">$100</p>
      </div>

      <div className="mt-4 text-[12px] text-center">
        <p>Shop Smart, Ship Free</p>
      </div>
    </div>
  );
};

export default CartSummery;
