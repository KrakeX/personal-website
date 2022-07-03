<script>
    export let icon;
    console.log(icon)

    const svgUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${icon}.svg`
</script>
<div class="flex flex-items items-center">
    <div class="icon colored" style="mask: url(svgUrl) no-repeat center / contain;-webkit-mask: url({svgUrl}) no-repeat center / contain;"></div>
    <span class="ml-2">{icon}</span> 
</div>


<style>
    .icon {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    }
    .colored {
    background-color: white; /* defines the background color of the image */
    }
</style>