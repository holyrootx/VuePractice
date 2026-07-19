<template>
  <div id="app">
    <header>
      <h1>관리자 시스템</h1>
    </header>

    <div class="admin-layout">
      <aside>
        <nav>
          <ul>
            <li>
              <router-link
                :to="{ name: 'dashboard' }"
              >
                대시보드
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'customer-list' }"
              >
                고객 관리
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <!-- URL에 연결된 화면이 이 자리에 표시됨 -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  gap: 24px;
}

aside {
  width: 200px;
}

main {
  flex: 1;
}
</style>