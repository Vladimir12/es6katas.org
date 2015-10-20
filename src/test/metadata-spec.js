import assert from 'assert';
import Metadata from '../metadata.js';

const fromMetadataJsonToKataGroups = (metadataJson) => {
  return Metadata.toKataGroups(metadataJson);
};

describe('create KataGroups from the metadata', function() {

  const group = {items: [{id: 1}]};
  const anotherGroup = {items: [{id: 2}]};
  
  it('for one group only one KataGroup is created', function() {
    const groupedMetadataJson = {
      groups: {'group name': group}
    };
    
    var kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    assert.equal(kataGroups.length, 1);
  });
  
  it('two groups two KataGroups are created', function() {
    const groupedMetadataJson = {
      groups: {
        'group name': group,
        'group name1': anotherGroup
      }
    };

    var kataGroups = fromMetadataJsonToKataGroups(groupedMetadataJson);
    assert.equal(kataGroups.length, 2);
  });
});
