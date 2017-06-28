<template>
	<div id="myapp">
			<header>
				<router-view name="header"></router-view>
			</header>
			<div id="content">
				<router-view name="content"></router-view>
			</div>
			<router-view name="footer"></router-view>
		
	</div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
