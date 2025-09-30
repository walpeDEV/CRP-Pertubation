Dieses Repository enthält die relevanten Skripte und Ergebnisse für meine Arbeit "Wirksamkeit von Top-K pertubations Angriffen gegenüber Concept Relevance Propagation".
Der Code für das pertubieren der Bilder befindet sich in [pertubation.ipynb](pertubation.ipynb) und nutzt die [crp2.yml](crp2.yml) conda Umgebung.
Der Code für das generieren der Heatmaps befindet sich in [attributions.ipynb](attributions.ipynb) und nutzt die [crp.yml](crp.yml) conda Umgebung.
Der Code für das visualisieren der Konzepte befindet sich in [feature_visualization.ipynb](feature_visualization.ipynb) und nutzt auch die [crp.yml](crp.yml) conda Umgebung.
Im Ordner [images/](images/) sind alle 9 Bilder zu finden die analysiert wurden. In [images/src.txt](images/src.txt) sind auch nochmal Quellenangaben zu den Bildern zu finden.
Im Ordner [results/](results/) sind alle 134 pertubierten Bilder zu finden und dessen Heatmaps zu finden. Auch die Heatmaps der Originalbilder sind in diesem Ordner zu finden.
Im Ordner [results_attr/](results_attr/) sind alle 71 Konzepte visualisiert die in den 8 relevantesten Konzepten der insgesamt 143 Bilder vorkamen.
