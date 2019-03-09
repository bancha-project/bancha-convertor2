<template>
  <v-container>
    <h2>json - yaml</h2>
    <v-layout row wrap>

      <v-flex xs6>
        <div class="mt-4 mx-2">
          <div>
            <span class="title">json</span>
            <v-radio-group v-model="jsonIndent" label="indent" row @change="jsonIndentChanged">
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="4" value="4"></v-radio>
            </v-radio-group>
          </div>
          <div id="json-div">
            <v-textarea outline v-model="jsonText" v-on:keyup="jsonChanged" height="400" background-color="teal">
              <template v-slot:append>
                <v-icon @click="copy('json-div')">file_copy</v-icon>
              </template>
            </v-textarea>
          </div>
        </div>
      </v-flex>

      <v-flex xs6>
        <div class="mt-4 mx-2">
          <div>
            <span class="title">yaml</span>
            <v-radio-group v-model="yamlIndent" label="indent" row @change="yamlIndentChanged">
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="4" value="4"></v-radio>
            </v-radio-group>
          </div>
          <div id="yaml-div">
            <v-textarea outline v-model="yamlText" v-on:keyup="yamlChanged" height="400" background-color="teal">
            </v-textarea>
          </div>
        </div>
      </v-flex>

      <v-flex xs12>
        <v-textarea box label="error message" v-model="errText" height="100" background-color="red lighten-5">
        </v-textarea>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import jsyaml from 'js-yaml'

  @Component({
    head: {
      title: 'json - yaml - 変換野郎',
    }
  })
  export default class Config extends Vue {

    private jsonText: string = '{"name": "taro", "family": [{"name": "jiro"}, {"name": "gonbey"}]}'
    private jsonIndent: string = '4'
    private yamlText: string = ''
    private yamlIndent: string = '4'
    private errText: string = ''

    private mounted() {
      this.jsonText = JSON.stringify(JSON.parse(this.jsonText), null, parseInt(this.jsonIndent, 10))
      this.yamlText = this.toYaml(this.jsonText)
    }

    private jsonChanged() {
      try {
        this.yamlText = this.toYaml(this.jsonText)
        this.errText = ''
      } catch (err) {
        this.errText = err
      }
    }

    private yamlChanged() {
      try {
        this.jsonText = this.toJson(this.yamlText)
        this.errText = ''
      } catch (err) {
        this.errText = err
      }
    }

    private toJson(s: string) {
      if (s === '') {
        return ''
      }
      const obj = jsyaml.load(s)
      return JSON.stringify(obj, null, parseInt(this.jsonIndent, 10))
    }

    private toYaml(s: string) {
      if (s === '') {
        return ''
      }
      const obj = JSON.parse(s)
      return jsyaml.dump(obj, {
        'indent': parseInt(this.yamlIndent, 10)
      })
    }

    private jsonIndentChanged(value: any) {
      this.jsonIndent = value
      this.yamlChanged()
    }

    private yamlIndentChanged(value: any) {
      this.yamlIndent = value
      this.jsonChanged()
    }

    private copy(s: string) {
      const node = document.getElementById(s) as Node
      document.getSelection()!.selectAllChildren(node)
      document.execCommand('copy')
    }

    public _() {
      this.jsonText = this.jsonText
      this.yamlText = this.yamlText
      this.jsonIndent = this.jsonIndent
      this.yamlIndent = this.yamlIndent
      this.errText = this.errText
      this.jsonChanged()
      this.yamlChanged()
      this.toJson('')
      this.toYaml('')
      this.jsonIndentChanged('')
      this.yamlIndentChanged('')
      this.copy('')
      this.mounted()
    }

  }
</script>
