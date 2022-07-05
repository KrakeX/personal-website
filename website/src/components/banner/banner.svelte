<script>
    export let text;
    export let button;
    export let icon;
    export let url;
</script>
<div class="dark:bg-senary rounded-2xl">
    <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="rounded-lg dark:bg-white dark:bg-opacity-20 md:flex hidden">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="hidden md:inline">{text? text: ''}</span>
          </p>
        </div>
        <div class="order-3 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a href="{url}" class="flex items-center justify-center px-4 border border-transparent rounded-md shadow-sm text-sm font-medium dark:text-primary dark:bg-white hover:dark:bg-opacity-90 hover:cursor-pointer py-1">
            {#if icon}
                <img height="32" width="32" src="{icon}" />
            {/if}
            <span class="ml-2">{button}</span>
        </a>
        </div>
      </div>
    </div>
  </div>