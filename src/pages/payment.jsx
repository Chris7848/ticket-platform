import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Ticket, Shield, Loader2, Tag, ChevronRight } from 'lucide-react';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState('');

  // Dummy order data based on previous flow
  const orderDetails = {
    match: "Argentina vs Spain",
    stage: "Group Stage",
    venue: "MetLife Stadium, NY/NJ",
    date: "June 15, 2026",
    category: "Premium (Category 1)",
    quantity: 2,
    pricePerTicket: 700,
    subtotal: 1400,
    fees: 140, // 10% fee
    total: 1540
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock processing delay
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment successful! UI Mockup complete.");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans pb-20">
      {/* NAVBAR */}
      <nav className="border-b border-white/5 bg-slate-950 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Secure Checkout</h1>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN - PAYMENT DETAILS */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Payment Methods */}
          <section>
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Method: Card */}
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`relative p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-500/10 text-white' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'}`}
              >
                <CreditCard className="w-6 h-6" />
                <span className="text-sm font-semibold">Credit Card</span>
                {paymentMethod === 'card' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />}
              </button>

              {/* Method: Paystack */}
              <button 
                onClick={() => setPaymentMethod('paystack')}
                className={`relative p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'paystack' ? 'border-[#0BA4DB] bg-[#0BA4DB]/10 text-white' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'}`}
              >
                <div className="w-6 h-6 bg-[#0BA4DB] rounded-sm flex items-center justify-center font-bold text-white text-xs">P</div>
                <span className="text-sm font-semibold">Paystack</span>
                {paymentMethod === 'paystack' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#0BA4DB]" />}
              </button>

              {/* Method: Flutterwave */}
              <button 
                onClick={() => setPaymentMethod('flutterwave')}
                className={`relative p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'flutterwave' ? 'border-[#F5A623] bg-[#F5A623]/10 text-white' : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'}`}
              >
                <div className="w-6 h-6 rounded-full border-2 border-[#F5A623] text-[#F5A623] flex items-center justify-center text-xs font-bold font-serif">fw</div>
                <span className="text-sm font-semibold">Flutterwave</span>
                {paymentMethod === 'flutterwave' && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#F5A623]" />}
              </button>
            </div>

            {/* Dynamic Form Area */}
            <motion.div 
              key={paymentMethod}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >
              {paymentMethod === 'card' && (
                <form className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Cardholder Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Card Number</label>
                    <div className="relative">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 pl-12 text-white focus:outline-none focus:border-emerald-500 transition-colors tracking-widest" />
                      <CreditCard className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Expiry (MM/YY)</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">CVC</label>
                      <input type="password" placeholder="•••" maxLength="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors tracking-widest" />
                    </div>
                  </div>
                </form>
              )}

              {paymentMethod !== 'card' && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Secure redirection via {paymentMethod === 'paystack' ? 'Paystack' : 'Flutterwave'}</h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto">You will be redirected to the secure portal to complete your payment using mobile money, bank transfer, or card.</p>
                </div>
              )}
            </motion.div>
          </section>

          {/* Promo Code Section */}
          <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4" /> Have a promo code?
            </h3>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter code here" 
                className="grow bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 uppercase"
              />
              <button className="px-6 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                Apply
              </button>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN - ORDER SUMMARY */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Ticket className="w-6 h-6 text-emerald-500" /> Order Summary
            </h2>
            
            {/* Match Info */}
            <div className="pb-6 border-b border-slate-800 mb-6">
              <h3 className="text-lg font-bold text-white mb-1">{orderDetails.match}</h3>
              <p className="text-sm text-slate-400 mb-3">{orderDetails.stage}</p>
              <div className="text-sm text-slate-300 space-y-1">
                <p>📍 {orderDetails.venue}</p>
                <p>📅 {orderDetails.date}</p>
              </div>
            </div>

            {/* Ticket Info */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="font-semibold text-slate-200">{orderDetails.category}</p>
                <p className="text-sm text-slate-500">{orderDetails.quantity}x Tickets at ${orderDetails.pricePerTicket}</p>
              </div>
              <p className="font-semibold">${orderDetails.subtotal}</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${orderDetails.subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Ticketing Fees (10%)</span>
                <span>${orderDetails.fees}</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-slate-800 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-slate-300 font-medium">Total Due</span>
                <span className="text-3xl font-black text-white">${orderDetails.total}</span>
              </div>
              <p className="text-right text-xs text-slate-500 mt-1">Includes all applicable taxes</p>
            </div>

            {/* Pay Button */}
            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/50 text-slate-950 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Pay ${orderDetails.total} <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center gap-1.5">
              <Shield className="w-4 h-4" /> 256-bit SSL Secure Checkout
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}