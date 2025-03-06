<template>
    <v-container>
      <v-btn color="primary" @click="openDialog">Ajouter une catégorie</v-btn>
      <v-row>
        <v-col v-for="category in categories" :key="category.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ category.name }}</v-card-title>
            <v-card-actions>
              <v-btn color="blue" @click="editCategory(category)">Modifier</v-btn>
              <v-btn color="red" @click="deleteCategory(category)">Supprimer</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  
      <CategoryForm 
        :dialog="dialog" 
        :editedCategory="editedCategory" 
        @update:dialog="dialog = $event" 
        @save="handleSave" 
      />
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue'
  import CategoryForm from '@/components/CategoryForm.vue'
  
  export default {
    components: {
      CategoryForm
    },
    setup() {
      const dialog = ref(false)  
      const editedCategory = ref(null)
      const categories = ref([
        { id: 1, name: 'Technologie' },
        { id: 2, name: 'Santé' },
        { id: 3, name: 'Éducation' }
      ])
  
      const openDialog = () => {
        editedCategory.value = null
        dialog.value = true
      }
  
      const editCategory = (category) => {
        editedCategory.value = { ...category }
        dialog.value = true
      }
  
      const deleteCategory = (category) => {
        categories.value = categories.value.filter(c => c.id !== category.id)
      }
  
      const handleSave = (category) => {
        if (editedCategory.value) {
          const index = categories.value.findIndex(c => c.id === editedCategory.value.id)
          categories.value[index] = category
        } else {
          categories.value.push({ ...category, id: categories.value.length + 1 })
        }
        dialog.value = false  
      }
  
      return { dialog, editedCategory, categories, openDialog, editCategory, deleteCategory, handleSave }
    }
  }
  </script>
  