<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center relative h-full w-full">
    <img src="/bg.jpg" alt="bg" class="object-cover w-full">
    <div class="glassmorphism rounded-2xl shadow-2xl w-1/3 py-6 mt-60 absolute text-white">
      <p class="text-center font-bold text-3xl mb-2">Thông Tin Cá Nhân</p>
      <div class="flex text-lg gap-8 justify-center items-center">
        <img src="/avatar.png" alt="avatar" class="h-78 w-44 rounded-xl object-cover">
        <div class="flex flex-col gap-3 text-gray-100">
          <p class="font-semibold">Họ và tên: Đỗ Đăng Tuân</p>
          <p class="font-semibold">Ngày sinh: 16/09/2003</p>
          <p class="font-semibold">Mã sinh viên: B21DCPT225</p>
          <p class="font-semibold">Lớp hành chính: D21PTDPT</p>
          <div class="flex gap-5">
            <div>
              <div class="flex text-lg items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f3f4f6">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a href="https://github.com/tuando169" target="_blank" class="text-gray-100 font-semibold">tuando169</a>
              </div>
              <div class="flex text-lg items-center gap-2">
                <svg style="width: 24px;height: 24px;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"
                  height="100" viewBox="0 0 50 50" fill="#f3f4f6">
                  <path
                    d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z">
                  </path>
                </svg>
                <a href="https://facebook.com/tuandd1" target="_blank" class="text-gray-100 font-semibold">Tuan Do</a>
              </div>
            </div>
            <div>
              <div class="flex text-lg items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="#FFFFFF">
                  <path
                    d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                </svg>
                <a href="https://github.com/tuando169" target="_blank" class="text-gray-100 font-semibold">PDF File</a>
              </div>
              <div class="flex text-lg items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="#FFFFFF">
                  <path
                    d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" />
                </svg>
                <a href="https://github.com/tuando169" target="_blank" class="text-gray-100 font-semibold">API Docs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.blur-image {
  filter: blur(10px);
  /* Apply blur effect to the image */
}
</style>
