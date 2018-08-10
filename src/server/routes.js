import * as joinMessages from 'common/messages/join';
import * as nicknameMessages from 'common/messages/nickname';
import * as joinActions from 'server/actions/join';
import * as nicknameActions from 'server/actions/nickname';

export default {
  [nicknameMessages.CHECK_AVAILABILITY]: {
    action: nicknameActions.checkAvailability,
    response: nicknameMessages.availability
  },
  [joinMessages.REQUEST]: {
    action: joinActions.requested,
    response: joinMessages.response
  }
};
