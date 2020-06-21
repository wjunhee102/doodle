<style>

  .ch-input {
    
  }

</style>

<template>
  <div :class="['ch-input',inputClass]">
    <label :for="inputId">
      <span>{{text}}</span>
      <span 
        class="text-red-primary"
        v-if="errCode"
      >
        - 입력해주세요
      </span>
      <input 
        class="mt-1 bg-white border rounded-lg py-1 px-1 block w-full appearance-none leading-normal focus:outline-none focus:shadow-outline"
        :class="[inputError()]"
        :type="inputType" 
        :id="inputId" 
        :placeholder="inputPls" 
        v-model="val"
      />
    </label>
  </div>
</template>

<script>
  export default {
    
    props: {
      cls: {
        type: String
      },

      lb: {
        type: String
      },

      content: {
        type: String
      },

      pls: {
        type: String
      },

      nType: {
        type: String
      },

      err: {
        type: Boolean
      }

    },

    data() {
      return {
        val : "",
        errCode : false
      }
    },

    watch: {
      val : function() {
        this.$emit('change', this.val);
      }
    },

    computed: {

      inputClass () {
        return this.cls? this.cls : null
      },

      inputId () {
        return this.lb? this.lb : `${this.inputType}1`
      },

      text () {
        return this.content? this.content : null
      },
      inputPls () {
        return this.pls ? this.pls : this.text
      },

      inputType () {
        return this.nType ? this.nType : "text"
      },
      
    },

    methods: {
      valueChange (e) {
        this.$emit("change", e.target.value)
      },

      inputError () {
        if(this.err && !this.val) {
          this.errCode = true
          return "border-red-primary"
        }
        this.errCode = false
        return "border-grey-dim"
      }

    }

  }
</script>