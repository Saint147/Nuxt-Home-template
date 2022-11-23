<template>
    <v-form v-model="valid">
        <v-text-field v-model="userInfo.name" label="Name" :rules="[required('name')]" v-if="hasName" ></v-text-field>
        <v-text-field v-model="userInfo.email" label="Email" :rules="[required('email'), emailFormat()]" ></v-text-field>
        <v-text-field v-model="userInfo.password" label="Password" :type="showPassword? 'text' :'passsword'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  @click:append="showPassword = !showPassword" counter=true :rules="[required('password'),minLength('password', 8)]" ></v-text-field>
        <v-btn @click="submitForm(userInfo)" :disable="!valid">{{ buttonText }}</v-btn>
    </v-form>
</template>
<script>
import  validations from "../utils/validation";

export default {
    data() {
        return{
              valid: false,
              showPassword: false,
             hasName: false,
              userInfo: {
              email: '',
              password: ''
          },
           ...validations
        };
        props: ['submitForm', 'buttomText', "hasName"]
    }
}
</script>
<style scoped>

</style>
