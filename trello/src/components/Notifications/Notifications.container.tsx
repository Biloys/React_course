import { inject } from "mobx-react";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { STORE_IDS } from "../../observableStores";
import { NotificationsStore } from "../../observableStores/Notification";
import { Notifications } from "./Notifications";

interface Props {
  [STORE_IDS.NOTIFICATION]?: NotificationsStore;
}

@inject(STORE_IDS.NOTIFICATION)
@observer
class NotificationsContainer extends Component<Props> {
  render() {
    const notifications = this.props[STORE_IDS.NOTIFICATION]!.notifications;
    console.log(notifications);

    return (
      <>
        <Notifications list={notifications} />
      </>
    );
  }
}

export { NotificationsContainer as Notifications };
