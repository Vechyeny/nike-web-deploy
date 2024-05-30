class Navbar extends HTMLElement{
    constructor(){
        super()
    }
connectedCallback(){
    this.innerHTML = `
    <section class="flex w-screen justify-center bg-gray-100">
    <section class="flex max-w-screen-2xl w-screen justify-between py-1 px-4 items-center">
        <div class="hidden md:flex xl:flex ">
        <img src="../../assets/images/Jumpman_logo.svg" class="h-4 mx-5" alt="Jumpman">
        <img src="../../assets/images/converse.logo.svg" class="h-4" alt="converse logo">
        </div>

        <div class="xl:flex gap-2 items-center mx-5">
            <ul class="hidden shrink-0 md:flex xl:flex">
            <li><a class="text-xs px-1 py-3" href="#">Find a Store</a></li>
            <li><a class="text-xs px-1 py-3" href="#">|</a></li>
            <li><a class="text-xs px-1 py-3" href="../../pages/help-page/index.html">Help</a></li>
            <li><a class="text-xs px-1 py-3" href="#">|</a></li>
            <li><a class="text-xs px-1 py-3" href="#">Join Us</a></li>
            <li><a class="text-xs px-1 py-3" href="#">|</a></li>
            <li><a class="text-xs px-1 py-3" href="../../pages/signin/index.html">Sign In</a></li>
        </ul>
    </div>
    </section>
</section>
    `
    }
}
customElements.define('navbar-component',Navbar)
