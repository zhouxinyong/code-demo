<template lang="html">
  <header class="header">
		<a href="/" class="logo"></a>
			<div class="btn-box">
				<a href="###" class="search-btn" @click="toggleInitialSearch">
          <i class="icon-search"></i>
        </a>
				<a href="###" class="history-btn">
          <i class="icon-history"></i>
        </a>
			</div>
	</header>
</template>

<script>
export default {
  name: 'header',
  data: function () {
    return {}
  },
  methods: {
    toggleInitialSearch: function () {
    }
  }
}
</script>

<style lang="css" scoped>
  .header {
  	display: flex;
  	justify-content: space-between;
  	height: 40px;
  	background: #fff;
  	border-bottom: 1px solid #e7e7e7;
  	padding: 0 8px;
  	box-sizing: border-box;
  	position: relative;
  	z-index: 1000;
    font-size: 12px;
  }

	.logo {
		display: block;
		width: 63px;
		height: 28px;
		background: url('./images/logo.png');
		background-size: 63px 28px;
		margin: 6px 0 0 1px;
	}

  .btn-box {
		display: flex;
		height: 100%;

		a {
			display: block;
			width: 44px;
			height: 100%;
			margin-right: 5px;
			position: relative;

			i {
				display: block;
				width: 22px;
				height: 22px;
				background: url('./images/ui_3@2x.png') no-repeat;
				background-size: 274px 228px;
				position: absolute;
				left: calc(50% - 11px); top: calc(50% - 11px);
			}
			.icon-search {
				background-position: 0 -206px;
			}
			.icon-history {
				background-position: -22px -206px;
			}
		}
	}
</style>
