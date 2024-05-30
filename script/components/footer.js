class Footer extends HTMLElement{
    constructor(){
        super()
    }
connectedCallback(){
    this.innerHTML = `
    <div class="flex w-screen">
        <div class="mx-auto"> 
        <hr class="w-full">
            <div class="grid-cols-5 space-x-20 pt-14 pb-20 max-w-full px-20 md:flex hidden">
           
                <div class="block">
                    <h4 class="font-bold mb-3 text-sm ">RESOURCES</h4>
                    <ul class="text-sm  transition-all duration-500 space-y-1 ">
                        <li class="mb-3"><a class=" text-gray-600">GIFT CARDS</a></li>
                        <li class="mb-3"><a class=" text-gray-600">FIND A STORE</a></li>
                        <li class="mb-3"><a class=" text-gray-600">BECOME A MEMBER</a></li>
                        <li class="mb-3"><a class=" text-gray-600">NIKE X NBA</a></li>
                        <li class="mb-3"><a class=" text-gray-600">Site Feedback</a></li>
                    </ul>
                </div>
    
                <div class="block">
                    <h4 class="text-sm text-gray-600 font-bold mb-3">Help</h4>
                    <ul class="text-xs  transition-all duration-500 space-y-1">
                        <li><a class="hover:text-black text-slate-500">Get help</a></li>
                        <li><a class=" hover:text-black text-slate-500">Order Status</a></li>
                        <li><a class=" hover:text-black text-slate-500">Shipping and Delivery</a></li>
                        <li><a class=" hover:text-black text-slate-500">Returns</a></li>
                        <li><a class=" hover:text-black text-slate-500">Order Cancellation</a></li>
                        <li><a class=" hover:text-black text-slate-500">Payment Options</a></li>
                        <li><a class=" hover:text-black text-slate-500">Gift Card Balance</a></li>
                        <li><a class=" hover:text-black text-slate-500">Contact Us</a></li>
                    </ul>
                    </ul>
                </div>
    
    
    
                <div class="block">
                    <h4 class="text-sm text-gray-600 font-bold mb-3">COMPANY</h4>
                    <ul class="text-xs  transition-all duration-500 space-y-1">
                        <li><a class="hover:text-black text-slate-500">About Nike</a></li>
                        <li><a class=" hover:text-black text-slate-500">News</a></li>
                        <li><a class=" hover:text-black text-slate-500">Careers</a></li>
                        <li><a class=" hover:text-black text-slate-500">Investor</a></li>
                        <li><a class=" hover:text-black text-slate-500">Purpose</a></li>
                        <li><a class=" hover:text-black text-slate-500">Sustainability</a></li>
                    </ul>
                </div>
    
               <div class="block">
                    <h4 class="text-sm text-gray-600 font-bold mb-3">PROMOTIONS & DISCOUNTS</h4>
                    <ul class="text-xs transition-all duration-500 space-y-1">
                        <li><a class="hover:text-black text-slate-500">Student</a></li>
                        <li><a class=" hover:text-black text-slate-500">Military</a></li>
                        <li><a class=" hover:text-black text-slate-500">Teacher</a></li>
                        <li><a class=" hover:text-black text-slate-500">First Responders & Medical</a></li>
                        <li><a class=" hover:text-black text-slate-500">Professionals</a></li>
                        <li><a class=" hover:text-black text-slate-500">Birthday</a></li>
                    </ul>
                </div>
    
        
                <div class="block">
                <h4 class="text-sm text-gray-600 font-bold mb-3">United States</h4>
                <div class="relative -top-8 right-8">
                 <img src="../../assets/images/globe.svg" alt="globe" class="h-6">
                </div>
                </div>
    
                </div>
            </div>
        </div>
    
    
        <section class="max-w-screen-xl w-full px-16 md:hidden flex flex-col">
            <hr class="my-5">
            <details open>
                <summary class="flex justify-between items-center">Resources
                <div class="leading-8 text-md">
                    <svg aria-hidden="false" class="h-6" focusable="false" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path><title>Caret Down Icon</title></svg>
                </summary>
                <ul class="text-sm  transition-all duration-500 space-y-3 mt-5">
                    <li class="mb-3"><a class=" text-gray-600">GIFT CARDS</a></li>
                    <li class="mb-3"><a class=" text-gray-600">FIND A STORE</a></li>
                    <li class="mb-3"><a class=" text-gray-600">BECOME A MEMBER</a></li>
                    <li class="mb-3"><a class=" text-gray-600">NIKE X NBA</a></li>
                    <li class="mb-3"><a class=" text-gray-600">Site Feedback</a></li>
                </ul>
                </div>
    
            </details>
            <hr class="my-5">
    
            <details>
                <summary class="flex justify-between items-center">Help
                <div class="leading-8 text-md">
                    <svg aria-hidden="false" class="h-6" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path><title>Caret Down Icon</title></svg>
                </summary>
                <ul class="text-sm  transition-all duration-500 space-y-3 mt-5">
                    <li><a class="hover:text-black text-slate-500">Get help</a></li>
                    <li><a class=" hover:text-black text-slate-500">Order Status</a></li>
                    <li><a class=" hover:text-black text-slate-500">Shipping and Delivery</a></li>
                    <li><a class=" hover:text-black text-slate-500">Returns</a></li>
                    <li><a class=" hover:text-black text-slate-500">Order Cancellation</a></li>
                    <li><a class=" hover:text-black text-slate-500">Payment Options</a></li>
                    <li><a class=" hover:text-black text-slate-500">Gift Card Balance</a></li>
                    <li><a class=" hover:text-black text-slate-500">Contact Us</a></li>
                </ul>
                </div>
            </details>
            <hr class="my-5">
    
            <details>
                <summary class="flex justify-between items-center">Company
                <div class="leading-8 text-md">
                    <svg aria-hidden="false" class="h-6" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path><title>Caret Down Icon</title></svg>
                </summary>
                <ul class="text-sm  transition-all duration-500 space-y-3 mt-5">
                    <li><a class="hover:text-black text-slate-500">About Nike</a></li>
                    <li><a class=" hover:text-black text-slate-500">News</a></li>
                    <li><a class=" hover:text-black text-slate-500">Careers</a></li>
                    <li><a class=" hover:text-black text-slate-500">Investor</a></li>
                    <li><a class=" hover:text-black text-slate-500">Purpose</a></li>
                    <li><a class=" hover:text-black text-slate-500">Sustainability</a></li>
                </ul>
                </div>
            </details>
            <hr class="my-5">
    
            <details>
                <summary class="flex justify-between items-center">Promotions & Discounts
                <div class="leading-8 text-md">
                    <svg aria-hidden="false" class="h-6" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path><title>Caret Down Icon</title></svg>
               </summary> 
               <ul class="text-sm transition-all duration-500 space-y-3 mt-5">
                <li><a class="hover:text-black text-slate-500">Student</a></li>
                <li><a class=" hover:text-black text-slate-500">Military</a></li>
                <li><a class=" hover:text-black text-slate-500">Teacher</a></li>
                <li><a class=" hover:text-black text-slate-500">First Responders & Medical</a></li>
                <li><a class=" hover:text-black text-slate-500">Professionals</a></li>
                <li><a class=" hover:text-black text-slate-500">Birthday</a></li>
            </ul>
                </div>
            </details>
            <hr class="my-5">
    
            <details>
                <summary class="flex justify-between items-center text-lg">
                    <div>
                        <img src="../../assets/images/globe.svg" alt="globe" class="h-6 flex"><p class="">United States</p>
                       </div>
                <div class="leading-8 text-md">
                    <svg aria-hidden="false" class="h-6" focusable="false" viewBox="0 0 24 24" role="img" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path><title>Caret Down Icon</title></svg>
                </summary>
                <p>What is Nike Membership?</p>
                <p>What is Nike SNKRS Pass?</p>
                <p>How can I join Nike SNKRS drawings?</p>
                <p>View all</p>
                </div>
            </details>
            <hr class="my-5">

        </div>
    </div>
    
    </section>
    `
}
}

customElements.define('footer-component', Footer)
