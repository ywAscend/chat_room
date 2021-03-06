
export const ImgSrc = (svg: string) => {
    return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`
}

export const EnumTypes = {'Login':'å åĨ','LoginOut':'įĻģåŧ'}


export const EmojEnum = [
    {
      id: 'grinning',
      name: 'Grinning Face',
      unified: '1f600',
      native: 'đ',
    },
    {
      id: 'grin',
      name: 'Grinning Face with Smiling Eyes',
      unified: '1f601',
      native: 'đ',
    },
    {
      id: 'joy',
      name: 'Face with Tears of Joy',
      unified: '1f602',
      native: 'đ',
    },
    {
      id: 'sweat_smile',
      name: 'Smiling Face with Open Mouth and Cold Sweat',
      unified: '1f605',
      native: 'đ',
    },
    {
      id: 'laughing',
      name: 'Smiling Face with Open Mouth and Tightly-Closed Eyes',
      colons: ':laughing:',
      emoticons: [':>', ':->'],
      unified: '1f606',
      native: 'đ',
    },
    {
      id: 'wink',
      name: 'Winking Face',
      colons: ':wink:',
      emoticons: [';)', ';-)'],
      unified: '1f609',
      native: 'đ',
    },
    {
      id: 'blush',
      name: 'Smiling Face with Smiling Eyes',
      unified: '1f60a',
      native: 'đ',
    },
    {
      id: 'yum',
      name: 'Face Savouring Delicious Food',
      unified: '1f60b',
      native: 'đ',
    },
    {
      id: 'sunglasses',
      name: 'Smiling Face with Sunglasses',
      colons: ':sunglasses:',
      emoticons: ['8)'],
      unified: '1f60e',
      native: 'đ',
    },
    {
      id: 'heart_eyes',
      name: 'Smiling Face with Heart-Shaped Eyes',
      unified: '1f60d',
      native: 'đ',
    },
    {
      id: 'kissing_heart',
      name: 'Face Throwing a Kiss',
      colons: ':kissing_heart:',
      emoticons: [':*', ':-*'],
      unified: '1f618',
      native: 'đ',
    },
    {
      id: 'hushed',
      name: 'Hushed Face',
      unified: '1f62f',
      native: 'đ¯',
    },
    {
      id: 'sleepy',
      name: 'Sleepy Face',
      unified: '1f62a',
      native: 'đĒ',
    },
    {
      id: 'relieved',
      name: 'Relieved Face',
      unified: '1f60c',
      native: 'đ',
    },
    {
      id: 'stuck_out_tongue',
      name: 'Face with Stuck-out Tongue',
      colons: ':stuck_out_tongue:',
      emoticons: [':p', ':-p', ':P', ':-P', ':b', ':-b'],
      unified: '1f61b',
      native: 'đ',
    },
    {
      id: 'stuck_out_tongue_winking_eye',
      name: 'Face with Stuck-out Tongue and Winking Eye',
      colons: ':stuck_out_tongue_winking_eye:',
      emoticons: [';p', ';-p', ';b', ';-b', ';P', ';-P'],
      unified: '1f61c',
      native: 'đ',
    },
    {
      id: 'stuck_out_tongue_closed_eyes',
      name: 'Face with Stuck-out Tongue and Tightly-Closed Eyes',
      unified: '1f61d',
      native: 'đ',
    },
    {
      id: 'drooling_face',
      name: 'Drooling Face',
      unified: '1f924',
      native: 'đ¤¤',
    },
    {
      id: 'sweat',
      name: 'Face with Cold Sweat',
      unified: '1f613',
      native: 'đ',
    },
    {
      id: 'pensive',
      name: 'Pensive Face',
      unified: '1f614',
      native: 'đ',
    },
    {
      id: 'upside_down_face',
      name: 'Upside-Down Face',
      unified: '1f643',
      native: 'đ',
    },
    {
      id: 'white_frowning_face',
      name: 'White Frowning Face',
      unified: '2639-fe0f',
      native: 'âšī¸',
    },
    {
      id: 'worried',
      name: 'Worried Face',
      unified: '1f61f',
      native: 'đ',
    },
    {
      id: 'cry',
      name: 'Crying Face',
      colons: ':cry:',
      emoticons: [":'("],
      unified: '1f622',
      native: 'đĸ',
    },
    {
      id: 'sob',
      name: 'Loudly Crying Face',
      unified: '1f62d',
      native: 'đ­',
    },
    {
      id: 'anguished',
      name: 'Anguished Face',
      colons: ':anguished:',
      emoticons: ['D:'],
      unified: '1f627',
      native: 'đ§',
    },
    {
      id: 'cold_sweat',
      name: 'Face with Open Mouth and Cold Sweat',
      unified: '1f630',
      native: 'đ°',
    },
    {
      id: 'scream',
      name: 'Face Screaming in Fear',
      unified: '1f631',
      native: 'đą',
    },
    {
      id: 'flushed',
      name: 'Flushed Face',
      unified: '1f633',
      native: 'đŗ',
    },
    {
      id: 'rage',
      name: 'Pouting Face',
      unified: '1f621',
      native: 'đĄ',
    },
    {
      id: 'mask',
      name: 'Face with Medical Mask',
      unified: '1f637',
      native: 'đˇ',
    },
    {
      id: 'face_with_thermometer',
      name: 'Face with Thermometer',
      unified: '1f912',
      native: 'đ¤',
    },
    {
      id: 'smiling_imp',
      name: 'Smiling Face with Horns',
      unified: '1f608',
      native: 'đ',
    },
    {
      id: 'nerd_face',
      name: 'Nerd Face',
      unified: '1f913',
      native: 'đ¤',
    },
    {
      id: 'hankey',
      name: 'Pile of Poo',
      unified: '1f4a9',
      native: 'đŠ',
    },
    {
      id: 'joy_cat',
      name: 'Cat Face with Tears of Joy',
      unified: '1f639',
      native: 'đš',
    },
    {
      id: 'muscle',
      name: 'Flexed Biceps',
      unified: '1f4aa',
  
      native: 'đĒ',
    },
    {
      id: 'point_left',
      name: 'White Left Pointing Backhand Index',
      unified: '1f448',
  
      native: 'đ',
    },
    {
      id: 'point_right',
      name: 'White Right Pointing Backhand Index',
      unified: '1f449',
  
      native: 'đ',
    },
    {
      id: 'point_up',
      name: 'White Up Pointing Index',
      unified: '261d-fe0f',
  
      native: 'âī¸',
    },
    {
      id: 'v',
      name: 'Victory Hand',
      unified: '270c-fe0f',
      native: 'âī¸',
    },
    {
      id: 'ok_hand',
      name: 'Ok Hand Sign',
      unified: '1f44c',
      native: 'đ',
    },
    {
      id: '+1',
      name: 'Thumbs Up Sign',
      unified: '1f44d',
      native: 'đ',
    },
    {
      id: 'the_horns',
      name: 'Sign of the Horns',
      unified: '1f918',
      native: 'đ¤',
    },
    {
      id: 'pray',
      name: 'Person with Folded Hands',
      unified: '1f64f',
      native: 'đ',
    },
    {
      id: 'money_mouth_face',
      name: 'Money-Mouth Face',
      native: 'đ¤',
      unified: '1f911',
    },
    {
      id: 'watermelon',
      name: 'Watermelon',
      unified: '1f349',
      native: 'đ',
    },
    {
      id: 'banana',
      name: 'Banana',
      native: 'đ',
      unified: '1f34c',
    },
    {
      id: 'rose',
      name: 'Rose',
      native: 'đš',
      unified: '1f339',
    },
    {
      id: 'wilted_flower',
      name: 'Wilted Flower',
      native: 'đĨ',
      unified: '1f940',
    },
    {
      id: 'raised_hands',
      name: 'Person Raising Both Hands in Celebration',
      unified: '1f64c',
      native: 'đ',
    },
    {
      id: 'pig',
      name: 'Pig Face',
      native: 'đˇ',
      unified: '1f437',
    },
    {
      id: 'lips',
      name: 'Mouth',
      unified: '1f444',
      native: 'đ',
    },
    {
      id: 'kiss',
      name: 'Kiss Mark',
      unified: '1f48b',
      native: 'đ',
    },
    {
      id: 'broken_heart',
      name: 'Broken Heart',
      colons: ':broken_heart:',
      emoticons: ['</3'],
      unified: '1f494',
      native: 'đ',
    },
    {
      id: 'anger',
      name: 'Anger Symbol',
      unified: '1f4a2',
      native: 'đĸ',
    },
    {
      id: 'bomb',
      name: 'Bomb',
      unified: '1f4a3',
      native: 'đŖ',
    },
    {
      id: 'gem',
      name: 'Gem Stone',
      unified: '1f48e',
      native: 'đ',
    },
    {
      id: 'ring',
      name: 'Ring',
      unified: '1f48d',
      native: 'đ',
    },
    {
      id: 'ship',
      name: 'Ship',
      native: 'đĸ',
      unified: '1f6a2',
    },
    {
      id: 'helicopter',
      name: 'Helicopter',
      native: 'đ',
      unified: '1f681',
    },
    {
      id: 'clock12',
      name: 'Clock Face Twelve Oclock',
      native: 'đ',
      unified: '1f55b',
    },
    {
      id: 'date',
      name: 'Calendar',
      native: 'đ',
      unified: '1f4c5',
    },
  ]