<template>
  <div class="simulator">
    <h1>Simulador</h1>
    <form class="simulator-form">
      <label for="country">Pais</label>
      <select name="country" id="" class="input-field" v-model="formData.country">
        <option
          v-for="(countryName, index) in countries"
          :key="index"
          :value="countryName"
          :name="countryName"
        >
          {{countryName}}
        </option>
      </select>

      <label for="country">Tipo Documento</label>
      <select name="document-type" id="" class="input-field" v-model="formData.document_type">
        <option
          v-for="(document, index) in documentType"
          :key="index"
          :value="document"
          :name="document"
        >
          {{document}}
        </option>
      </select>

      <label for="country">Numero Documento</label>
      <input type="text" class="input-field" v-model="formData.document_number">

      <label for="country">Nombre Completo</label>
      <input type="text" class="input-field" v-model="formData.fullname">

      <label for="country">Correo Electronico</label>
      <input type="text" class="input-field" v-model="formData.email">

      <label for="country">Monto</label>
      <input type="text" class="input-field" v-model="formData.amount">

      <label for="country">Medio de Consignacion</label>
      <select name="document-type" id="" class="input-field" v-model="formData.consignation_method">
        <option
          v-for="(method, index) in consignationMethod"
          :key="index"
          :value="method"
          :name="method"
        >
          {{method}}
        </option>
      </select>

      <label for="country">Plazo (12 - 120 meses)</label>
      <input type="text" class="input-field" v-model="formData.term">

      <label for="country">Interes</label>
      <input disabled type="text" class="input-field" :value="interestValue">

      <button
        @click="calculate"
      >Calcular</button>
    </form>
    <p>{{ this.interestValue.split(' ')[0] / 100 }}</p>
    <p>{{ this.formData.amount }}</p>
    <p>{{ this.formData.term }}</p>
  </div>
</template>

<script src="./SimulatorView.js" lang="js"></script>
<style src="./SimulatorView.scss" lang="scss"></style>
