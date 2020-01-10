<template>
	<div class="slider">
		<el-carousel :interval="5000" arrow="always">
			<el-carousel-item v-for="item in 4" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script>
	export default {
		name: "slider"
	};
</script>
<style scoped>
	.slider {
		margin: 0;
		/* height:220px; */
		width: 100%;
	}

	.el-carousel {
		border-radius: 5px;
		/* height:220px; */
	}

	.el-carousel__container {
		/* height:220px; */
	}

	.el-carousel__container {
		/* height:220px; */
		width: 100%;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;opacity: 0;
		line-height: 250px;
		margin: 0;
		background-size: 186px 186px;
		
	}

	.el-carousel__item {
		background: no-repeat;
		background-size:100%;
	}

	.el-carousel__item:nth-child(3) {
		background-color: #d3dce6;

		background-image: url(../assets/img/x3.jpg)
	}

	.el-carousel__item:nth-child(4) {
		background-color: #d3dce6;

		background-image: url(../assets/img/x7.jpg)
	}

	.el-carousel__item:nth-child(5) {
		background-image: url(../assets/img/x4.jpg)
	}

	.el-carousel__item:nth-child(6) {
		background-image: url(../assets/img/x2.jpg)
	}


	.el-carousel__arrow {
		top: 42% !important;
	}
</style>
