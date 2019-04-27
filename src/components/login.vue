<template>
  <div id="login">
		<input type="text" name="id" placeholder="ID" v-model="userId" required>
		<input type="password" name="pw" placeholder="Password" v-model="userPw" required>
      <input type="submit" @click.prevent="login" value="로그인">
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      userId: '',
      userPw: '',
    }
  },
  methods: {
    login: function() {

      if(this.userId == '' || this.userPw == '') {
        alert('아이디 또는 패스워드를 확인하세용.')
      } else {
        axios.post('http://192.168.200.167:3000/login', {
          userId: this.userId,
          userPw: this.userPw
        })
          .then(result => {
            console.log('result \n', result);
            console.log(result.headers['x-auth-token'])
            localStorage.setItem('token', result.headers['x-auth-token']);
            this.$router.push({ path: '/' })
          })
          .catch(err => {
            alert('로그인 실패')
          })
      }
    }
  }
}
</script>


<style scoped>

</style>
