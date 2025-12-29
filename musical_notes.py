from music21 import stream, note, scale, metadata

# List of major scale roots
major_roots = [
    'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#',
    'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'
]

score = stream.Score()
score.append(metadata.Metadata(title="Major Scales"))

for root in major_roots:
    part = stream.Part()

    # Create a MajorScale anchored at the root with an octave range
    ms = scale.MajorScale(root + "4")  # put scale starting around middle register

    # Get pitches for one octave range
    pitches = ms.getPitches(root + '4', root + '5')

    # Add each pitch as a quarter note
    for p in pitches:
        n = note.Note(p)
        n.quarterLength = 1
        part.append(n)

    score.append(part)

# Save to MusicXML
score.write('musicxml', fp='major_scales_fixed.xml')
print("Saved: major_scales_fixed.xml")


score.show('musicxml.pdf')   # if MuseScore is configured
