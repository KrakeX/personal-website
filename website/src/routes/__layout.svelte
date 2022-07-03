<script>
    import Nav from '../components/nav/nav.svelte'
    import Footer from '../components/footer/footer.svelte'
</script>
<div class="bg-white dark:bg-oxford p-8 mx-auto text-teal dark:text-cream">
    <Nav/>
    <div class="container mx-auto dark:bg-cardinal dark:bg-opacity-50 p-8 rounded-b-lg">
        <slot/>
    </div>
    <Footer/>
    
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>