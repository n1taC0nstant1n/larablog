<!DOCTYPE html>
<html lang="en">
<head>
  @include('includes.header')
</head>
<body>
    <!-- Preloader -->
	<div class="spinner-wrapper">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
    <!-- end of preloader -->

  @yield('content')

  @include('includes.footer')

</body>
</html>