<script>
    import Nav from '../components/nav/nav.svelte'
    import Footer from '../components/footer/footer.svelte'
</script>
<div class="bg-white dark:bg-oxford py-4 mx-auto text-teal dark:text-cream">
    <Nav/>
    <div class="container mx-auto dark:bg-cardinal dark:bg-opacity-50 md:px-8 md:py-4 px-2  rounded-b-lg">
        <slot/>
    </div>
    <Footer/>
    
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>