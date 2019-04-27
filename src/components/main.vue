<template>
  <div id="main">
		<h1>Hi, {{ user }}! Welcome to {{ storeName.name }}</h1>
		<button id="" @click="getList">Show me the menu</button>
		<ul>
			<li v-for="(coffee, index) in coffeeList" :key="index">
				<span>{{ coffee.name }}</span>
				<span>{{ coffee.price }}</span>
			</li>
		</ul>

		<input type="button" @click="logout" value="로그아웃">
	</div>
</template>

<script>
import axios from 'axios'

var reqUrl = 'http://192.168.200.167:3000'
var http = null;

export default { 
  name: 'main',
  data() {
    return {
      storeName: { name: '' }, 
      coffeeList: [],
			user: ''
    }
	},
	created: function() {
		var token = localStorage.getItem('token')? localStorage.getItem('token') : '';
		http = axios.create({
			baseURL: reqUrl,
			timeout: 5 * 1000,
			headers: {
				'x-auth-token': token
			}
		})

		console.log('main::created::token -', this.token)

		http.get(`/name`)
			.then(result => {
				this.storeName = result.data
			})
			.catch(err => {
				console.log(err);
				this.$router.push({ path: '/login' })
			})

		http.get(`/userName`)
			.then(result => {
				this.user = result.data.userName
			})
			.catch(err => {
				console.log(err)
				this.$router.push({ path: '/login' })
			})
	},
	methods: {
		getList: function() {
			http.get(`/coffeeList`)
				.then(result => {
					this.coffeeList = result.data
				})
				.catch(err => {
					console.log(err)
					this.$router.push({ path: '/login' })
					// window.location.href = `${reqUrl}/login.html`;
				})
		},
		logout: function() {
			http.post(`/logout`)
				.then(result => {
					localStorage.removeItem('token');
					this.$router.push({ path: '/login' })
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
}
</script>


<style scoped>

</style>
