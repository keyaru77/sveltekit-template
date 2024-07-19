<script context="module" lang="ts">
  export async function load({ fetch }) {
    const res = await fetch(`/api/data`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return { props: { data } };
  }
</script>

<script lang="ts">
  export let data;
</script>

<main class="p-4">
  <h1 class="text-2xl font-bold mb-4">Latest Updates</h1>
  {#if data}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each data.updates as update}
        <div class="border p-4 rounded-lg">
          <img src={update.imgSrc} alt={update.title} class="w-full h-auto mb-2" />
          <h2 class="text-xl font-bold">{update.title}</h2>
          <p class="text-gray-500">{update.type}</p>
          <a href={update.chapter.href} class="text-blue-500">{update.chapter.title}</a>
          <p class="text-gray-400">{update.chapter.date}</p>
        </div>
      {/each}
    </div>
    <div class="mt-8 flex justify-between">
      <a href="/page/2" class="text-blue-500">Next</a>
    </div>
  {:else}
    <p class="text-red-500">Failed to load data</p>
  {/if}
</main>
