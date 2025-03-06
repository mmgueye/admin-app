<template>
    <v-dialog 
      :model-value="dialog" 
      @update:model-value="$emit('update:dialog', $event)" 
      persistent
    >
      <v-card>
        <v-card-title>{{ editedCategory ? 'Modifier' : 'Ajouter' }} une catégorie</v-card-title>
        <v-card-text>
          <v-text-field v-model="category.name" label="Nom de la catégorie" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="save">Enregistrer</v-btn>
          <v-btn color="grey" @click="cancel">Annuler</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { ref, watch } from 'vue'
  
  export default {
    props: ['editedCategory', 'dialog'],
    emits: ['save', 'update:dialog'],
    
    setup(props, { emit }) {
      const category = ref({ name: '' })
  
      watch(() => props.editedCategory, (newVal) => {
        category.value = newVal ? { ...newVal } : { name: '' }
      })
  
      const save = () => {
        emit('save', category.value)
      }
  
      const cancel = () => {
        emit('update:dialog', false)
      }
  
      return { category, save, cancel }
    }
  }
  </script>
  