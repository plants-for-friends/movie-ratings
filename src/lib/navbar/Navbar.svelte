<script>
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header>
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="/todos">Test-Name</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> -->

	<!-- Spacer, for centering navabr -->
	<!-- <div class="corner">
	</div> -->


	<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container fluid">
            <!-- Navabr Logo and Brandname -->
            <a class="navbar-brand" sveltekit:prefetch href="/">
                <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top">
                Plants4Friends
            </a>
            <!-- Toggler for Expandsion -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navigation Links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" sveltekit:prefetch href="/">Home</a>
                    <a class="nav-link" sveltekit:prefetch href="/about">Anzeige erstellen</a>
                    <a class="nav-link" sveltekit:prefetch href="/todos">Karte</a>
                </div>
            </div>
        </div>
    </nav>
</header>