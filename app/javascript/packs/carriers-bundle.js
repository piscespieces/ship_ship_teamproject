import ReactOnRails from 'react-on-rails';

import Carriers from '../bundles/Carriers/components/Carriers';

// This is how react_on_rails can see the Carriers in the browser.
ReactOnRails.register({
    Carriers,
    LandingPage
});
