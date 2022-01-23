<script>
	import { page } from '$app/stores';	//Import current page for page identifier on Navbar
	import logo from './logo.svg';
</script>

<header>
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