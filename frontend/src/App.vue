<template>
  <div>
    <header class="flex h-10">
      <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/news">News</router-link>
      </nav>
    </header>
    <main class="bg-gray-600 min-h-screen">
      <router-view />
    </main>
  </div>
</template>
