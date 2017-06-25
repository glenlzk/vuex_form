<template>
  <div class="form" v-if="hideComponents">
    <ul>
      <slot name="item"  v-for="item in items" :text="item.text">
        <!-- 这里写入备用内容 -->
      </slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'form',
    props: [
        'items'
    ],
    data () {
      return {
        msg: 'Welcome to Your test components',
        hideComponents: true
      }
    },
    watch: {
      value(newVal) {
          console.log('监听数学: ', newVal);
      }
    },
    methods: {
      // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
      updateValue: function (value) {
        var formattedValue = value
        // 删除两侧的空格符
          .trim()
          // 保留 2 小数位
          .slice(0, value.indexOf('.') + 3)
        // 如果值不统一，手动覆盖以保持一致
        if (formattedValue !== value) {
          this.$refs.input.value = formattedValue
        }
        // 通过 input 事件发出数值
        this.$emit('input', Number(formattedValue))
      },
      hideComponentsFun() {
          const self = this;
          self.hideComponents = !self.hideComponents;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
