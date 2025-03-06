<template>
  <v-table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories" :key="category.id">
        <td>{{ category.name }}</td>
        <td>
          <v-btn color="warning" @click="$emit('edit', category)">Modifier</v-btn>
          <v-btn color="red" @click="$emit('delete', category.id)">Supprimer</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: ['categories']
}
</script>
