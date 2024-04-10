# get the one-line output readout of git log,
# then redirect that output into a file in the _data folder
# called changelog.tsv
git log --oneline > _data/changelog.tsv

# add a header row, labelling the first column as "hash",
# and the second column as "message".
# the '.bak' seems to be required, to let it save the backup
# somewhere. this file is ignored in .gitignore.
sed -i '.bak' '1s/^/hash\tmessage\n/' _data/changelog.tsv

# replace the space between the hash and message on each line
# with a tab
sed -i '.bak' 's/ /\t/1' _data/changelog.tsv

# replace double quotes with single quotes
# because ruby was complaining and i couldn't figure out
# how to escape it properly.
# note to self: i found this link in the docs
# https://jekyllrb.com/docs/datafiles/#csvtsv-parse-options
# that points to somewhere i could probably provide
# some configuration option to make the double quotes work
sed -i '.bak' 's/"/\x27/g' _data/changelog.tsv