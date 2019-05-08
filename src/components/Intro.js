import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from '../styles/Intro';

/**
 * This functinal component renders the intro screen using the information of the questionnaire
 */
const Intro = ({ questionnaire, isLoading, updateLoadingFFQ }) => (
  <View style={styles.mainView}>
    <View style={styles.titleDescView}>
      <Text h3 style={styles.title}>
        {questionnaire[0].title}
      </Text>
      <Text style={styles.desc} >
        {questionnaire[0].desc}
      </Text>
    </View>
    {isLoading &&
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          animating={true}
          size="large"
          color="#0000ff"
        />
      </View>
    }
    {!isLoading &&
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        buttonStyle={styles.button}
        title="Start"
        onPress={() => updateLoadingFFQ('question')}
      />
    }

  </View >
)

Intro.propTypes = {
  // Currently selected questionnaire
  questionnaire: PropTypes.array,
  // State that indicates if there is a fetch operation in progress
  isLoading: PropTypes.bool,
  // Fuction to fetch the first question of the questionnaire
  updateLoadingFFQ: PropTypes.func
}

export default Intro;
