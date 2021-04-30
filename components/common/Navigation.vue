<template>
  <div class="navigation">
    <div class="navigation__top">
      <img src="@/assets/icons/camera_movie.svg" class="logo" />
      Media App
    </div>
    <div class="navigation__body">
      <div class="navigation__links">
        <div class="navigation__link">
          Popular
          <img src="@/assets/icons/arrow.svg" class="navigation__icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navigation {
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  margin-right: 3px;
}

.navigation__top {
  width: 100%;
  height: 70px;
  background: #f83745;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
}

.navigation__body {
  width: 100%;
  height: 100%;
  background: #191c1f;
  padding: 50px 0;
}

.navigation__links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation__link {
  display: flex;
  width: 100%;
  height: 50px;
  color: darkgray;
  padding-left: 65px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
}

.navigation__icon {
  visibility: hidden;
}

.navigation__link:hover {
  background: #222b31;
  color: #f83745;
}

.navigation__link:hover .navigation__icon {
  visibility: visible;
}
</style>
