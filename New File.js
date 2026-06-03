// checkout.js

// 1. आपका दिया गया वॉलेट एड्रेस यहाँ फिक्स किया गया
const merchantWallet = "0x318D95848d7fd094e010f1130ef9863CA36C2ca2"; 

document.getElementById('payWithCardBtn').addEventListener('click', function() {
    
    // 2. गेटवे के विजेट को बैकएंड में इनिशियलाइज करना
    // यह गेटवे यूजर के क्रेडिट कार्ड से डॉलर लेगा और उसे क्रिप्टो में बदलेगा
    const paymentWidget = new CryptoOnRampWidget({
        apiKey: "pk_live_sample_key_12345", // गेटवे की API Key
        cryptoCurrency: "USDC",              // डॉलर कॉइन (या ETH/Polygon)
        fiatCurrency: "USD",
        fiatAmount: "0.02",
        
        // 3. सबसे महत्वपूर्ण लाइन: पैसा सीधे इस एड्रेस पर ट्रांसफर होगा
        walletAddress: merchantWallet 
    });

    // 3. विजेट को स्क्रीन पर लोड करना
    paymentWidget.open();
});
