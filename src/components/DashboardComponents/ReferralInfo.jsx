export default function ReferralInfo() {
  return (
    <div className="w-[90vw] mx-auto p-4 space-y-8 text-md font-medium text-gray-700">

      {/* Top Info Box */}
      <div className="border border-dashed rounded-md p-8">
        <div className="flex justify-between text-center text-md">
          <div className="flex-1">
            <p className="text-gray-500 mb-1">Service</p>
            <p className="text-indigo-600 font-semibold">some service</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 mb-1">Your Referrals</p>
            <p className="text-indigo-600">0 + 0</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 mb-1">Active Referrals</p>
            <p className="text-indigo-600">0 + 0</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-500 mb-1">Total Ref. Earnings</p>
            <p className="text-indigo-600 font-semibold">$0.00</p>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div>
        <p className="text-base font-semibold text-gray-800">Refer Friends And Earn More !!</p>
        <hr className="mt-2 border-t border-blue-200 w-full" />
      </div>

      {/* Referral Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6">

        {/* Referral Link */}
        <div className="flex-1">
          <p className="mb-2 text-sm font-semibold">Your Referral Link</p>
          <div className="flex items-center">
            <input
              type="text"
              value="https://gobusiness.com/?referral=ABCXYZ"
              readOnly
              className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button className="ml-2 px-4 py-2 text-white rounded-full flex items-center justify-center text-sm font-medium"
              style={{
                background: "linear-gradient(to left, #8E54E9, #4776E6)"
              }}>
              📝 Copy
            </button>
          </div>
        </div>

        {/* Referral Code */}
        <div className="flex-1">
          <p className="mb-2 text-sm font-semibold">Your Referral Code</p>
          <div className="flex items-center">
            <input
              type="text"
              value="ABCXYZ"
              readOnly
              className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none"
            />
            <button className="ml-2 px-4 py-2 text-white rounded-full flex items-center justify-center text-sm font-medium"
              style={{
                background: "linear-gradient(to left, #8E54E9, #4776E6)"
              }}>
              📝 Copy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
