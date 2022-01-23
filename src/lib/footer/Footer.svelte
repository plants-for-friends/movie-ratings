<script>
    import logo from './logo.svg';
</script>

<div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">© 2021 Plants4Friends</p>
    
        <!-- Footer Logo -->
        <!-- <a href="index.html" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"> -->
            <!-- <img src="./logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> -->  
        <!-- </a> -->
    
        <a sveltekit:prefetch href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img src={logo} alt="PlantLogo" width="30" height="24" class="d-inline-block align-text-top" />
        </a>

        <p class="col-md-4 mb-0 text-muted">Made with ❤ in Mannheim</p>
    </footer>
</div>