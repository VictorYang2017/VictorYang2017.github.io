// Import authContext
import { Consumer } from '../authContext';

/* This function takes in a component, calls "authContext" consumer, pass the context state/value as props 
in to the component and returns the component*/
const withAuthContext = (Component) => (props) =>
	(
		<Consumer>
			{(context) => <Component {...props} context={context} />}
		</Consumer>
	);

export default withAuthContext;
