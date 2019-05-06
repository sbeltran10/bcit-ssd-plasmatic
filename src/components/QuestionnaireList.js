import React from 'react';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import styles from '../styles/QuestionnaireList';
import PropTypes from 'prop-types';

/**
 * Renders the list of questionnaires of a given type
 */

let QuestionnaireList = ({questionnaires, onSelect, selectedQuestionnaireId}) => (
    <View style={styles.listContainer}>
        <ScrollView>
            {
             questionnaires.map((item) => (
                <ListItem 
                    key = {item.id} 
                    title={item.title}
                    onPress={ ()=> onSelect(item.id, item.title) }
                    containerStyle={selectedQuestionnaireId === item.id ?
                        styles.questionnaireContainerSelected
                        :
                        styles.questionnaireContainer
                    }    
                />
            ))
            }
        </ScrollView>
    </View>
)

QuestionnaireList.propTypes = {
    /** Array containing the queried questionnaires. */
    questionnaires: PropTypes.array, 
    /** callback to update the category state. */
    onSelect: PropTypes.func, 
    /** Primary key of the selected questionnaire. */
    selectedQuestionnaireId: PropTypes.number
}

export default QuestionnaireList;