import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'

const Tasks = ({ dispatch, tasks }) => ( // eslint-disable-line no-unused-vars
  <View style={styles.container}>
    <Text>Everyday</Text>
  </View>
)

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

const mapStateToProps = ({
  dispatch,
  tasksState
}) => ({
  dispatch,
  tasks: tasksState.tasks
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(mapStateToProps)(Tasks)
