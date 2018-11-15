import React, {Component} from 'react';
import GroupInfoContainer from './GroupInfoContainer';
import GroupInfoSection from './GroupInfoSection';

class GroupInfo extends Component{
    state ={
        checked: [],
    };

    componentWillMount(){
        this.setState({
            checked: [
                true,
                false,
                false,
                false,
                false
            ]
        });
    }

    //Duda del input del un/checkedIcon, un/checkedColor

    render(){
        return(
            <GroupInfoContainer>
                <GroupInfoSection>
                    <div style={styles.titleContainer}>
                        <form>
                            <label>
                                <input
                                    name="frutosRojos"
                                    type="checkbox"
                                    checked={this.state.checked[0]}
                                    onChange={() => this.setState({checked: [!this.state.checked[0], this.state.checked[1], this.state.checked[2], this.state.checked[3], this.state.checked[4]]})} 
                                /> &nbsp; Frutos rojos
                            </label>
                        </form>
                    </div>
                </GroupInfoSection>
                <GroupInfoSection>
                    <div style={styles.titleContainer}>
                        <form>
                            <label>
                                <input
                                    name="semillas"
                                    type="checkbox"
                                    checked={this.state.checked[1]}
                                    onChange={() => this.setState({checked: [this.state.checked[0], !this.state.checked[1], this.state.checked[2], this.state.checked[3], this.state.checked[4]]})} 
                                /> &nbsp; Semillas
                            </label>
                        </form>
                    </div>
                </GroupInfoSection>
                <GroupInfoSection>
                    <div style={styles.titleContainer}>
                        <form>
                            <label>
                                <input
                                    name="verduras"
                                    type="checkbox"
                                    checked={this.state.checked[2]}
                                    onChange={() => this.setState({checked: [this.state.checked[0], this.state.checked[1], !this.state.checked[2], this.state.checked[3], this.state.checked[4]]})} 
                                /> &nbsp; Verduras
                            </label>
                        </form>
                    </div>
                </GroupInfoSection>
                <GroupInfoSection>
                    <div style={styles.titleContainer}>
                        <form>
                            <label>
                                <input
                                    name="agua"
                                    type="checkbox"
                                    checked={this.state.checked[3]}
                                    onChange={() => this.setState({checked: [this.state.checked[0], this.state.checked[1], this.state.checked[2], !this.state.checked[3], this.state.checked[4]]})} 
                                /> &nbsp; Agua
                            </label>
                        </form>
                    </div>
                </GroupInfoSection>
                <GroupInfoSection>
                    <div style={styles.titleContainer}>
                        <form>
                            <label>
                                <input
                                    name="frutas"
                                    type="checkbox"
                                    checked={this.state.checked[4]}
                                    onChange={() => this.setState({checked: [this.state.checked[0], this.state.checked[1], this.state.checked[2], this.state.checked[3], !this.state.checked[4]]})} 
                                /> &nbsp; Frutas
                            </label >
                        </form>
                    </div>
                </GroupInfoSection>
            </GroupInfoContainer>
        );
    }
}

const styles = {
	arrowContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 45,
	},
	checkBoxContainerStyle:{
		backgroundColor: 'transparent',
		margin: 0,
		marginBottom: -1,
		borderStartWidth: 0,
		borderEndWidth: 0,
		borderTopWidth: 1,
		borderTopColor: '#B3B3B3',
		borderBottomWidth: 1,
		borderBottomColor: '#B3B3B3'
	},
	titleContainer:{
		justifyContent: 'flex-start',
		marginRight: 10,
		flex: 1,
	},
	textTitle: {
		color: '#545454',
		fontWeight: 'normal',
		fontSize: 18
	},
	arrow: {
		width: 13,
		height: 13
	}
};

export default GroupInfo;
