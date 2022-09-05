<template>
  <el-row class="min-h-screen">
    <el-col :lg="16" :md="12" class="flex bg-blue-500  justify-center items-center flex-col">
      <div>
        <div class="text-5xl text-white font-bold">Welcome!</div>
        <div class="text-2xl text-gray-300">Lorem ipsum dolor sit amet,
          doloremque earum inventore
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="flex justify-center items-center flex-col">
      <div class="text-3xl font-bold">欢迎回来</div>
      <div class="flex justify-center items-center text-gray-300 my-5 space-x-2">
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form ref="formRef" :model="form" :rules="rules" class="w-[250px]">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit" type="primary" round class="w-[250px] bg-blue-500" :loading="loading">登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { login, getInfo } from "@/api/manager";
import { setToken } from "@/composables/auth";
import { useRouter } from "vue-router";
import {toast} from "@/composables/util";
import {useStore} from "vuex"

const router = useRouter();
const store=useStore()
const form = reactive({
  username: "",
  password: ""
});

//表单验证
const rules = reactive({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur"
    },
    {
      min: 4,
      max: 10,
      message: "长度必须在4-10之间",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur"
    },
    {
      min: 4,
      max: 10,
      message: "长度必须在4-10之间",
      trigger: "blur"
    }
  ]
});
const formRef = ref(null);
const loading = ref(false);

function submit() {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    loading.value = true;
    login(form.username, form.password)
      .then((res) => {
        //提示成功消息
        toast("登录成功!")
        //设置token
        setToken(res.token);
        //获取用户信息
        getInfo().then((res) => {
          store.commit("SET_USERINFO",res)
        });
        router.push("/");
      })
      .finally(() => {
        loading.value = false;
      });
  });
}
</script>

<style scoped>
.line {
  @apply h-[1px] w-16 bg-gray-200
}

</style>