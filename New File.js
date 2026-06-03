// New File.js
document.getElementById('payWithCardBtn').addEventListener('click', function() {
    // यहाँ अपनी मर्चेंट या गेटवे पेमेंट लिंक डालें
    const paymentUrl = "https://commerce.coinbase.com/checkout/your-link-id"; 
    
    // यह बटन दबाते ही यूजर को सुरक्षित भुगतान पेज पर भेज देगा
    window.location.href = paymentUrl;
});
