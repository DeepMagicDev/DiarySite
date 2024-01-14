
<script>
  import { onMount } from 'svelte';

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    console.log("Menu toggled:", isMenuOpen);
  }

  onMount(() => {
    console.log("NavBar mounted");
  });
</script>

<!-- navbar goes here -->
<nav class="bg-orange-200">
	<div class="max-w-6xl mx-auto px-4">
		<!-- main flex container -->
		<div class="flex justify-between">
			<!-- logo and primary nav container -->
			<div class="flex space-x-3">
				<!--logo-->
				<div>
					<a href="/" class="flex items-center py-5 px-3 text-gray-700">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 text-rose-900"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
							/>
						</svg>
						<span class="font-bold">Warm Journal</span>
					</a>
				</div>

				<!-- primary nav -->
				<div class="hidden md:flex items-center space-x-1">
					<a
						href="#"
						class="flex items-center py-2 px-3 text-gray-700 hover:text-rose-900"
						>About</a
					>
					<a
						href="#"
						class="flex items-center py-2 px-3 text-gray-700 hover:text-rose-900"
						>Contact</a
					>
				</div>
			</div>

			<!-- secondary nav -->
			<div class="hidden md:flex items-center space-x-3">
				<a
					href="/signup"
					class="flex items-center py-2 px-3 bg-rose-300 rounded-lg text-rose-900 hover:bg-rose-200 transition duration-300"
					>Sign Up</a
				>
				<a
					href="#"
					class="flex items-center py-2 px-3 text-gray-700 hover:text-rose-900"
					>Sign In</a
				>
			</div>

			<!-- mobile button goes here -->
			<div class="md:hidden flex items-center">
				<button on:click={toggleMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- mobile menu -->
	<div class='{isMenuOpen ? 'mobile-menu' : 'mobile-menu hidden'} md:hidden' >
		<a href="#" class="block py-2 px-4 text-sm text-center hover:bg-orange-100">About</a>
		<a href="#" class="block py-2 px-4 text-sm text-center hover:bg-orange-100">Contact</a>
		<a href="#" class="block py-2 px-4 text-sm text-center hover:bg-orange-100">Sign In</a>
		<a href="#" class="block py-2 px-4 text-sm text-center hover:bg-orange-100">Sign Up</a>
	</div>
</nav>



