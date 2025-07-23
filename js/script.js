        // Resize Functionality for Desktop Sidebar
        const resizeHandle = document.querySelector('.resize-handle');
        let isResizing = false;
        // let lastDownX = 0;
        
        if (resizeHandle) {
            resizeHandle.addEventListener('mousedown', (e) => {
                isResizing = true;
                document.body.style.cursor = 'col-resize';
                document.body.style.userSelect = 'none';
                document.addEventListener('mousemove', handleResize);
                document.addEventListener('moseup', stopResize);
                return false;
                // lastDownX = e.clientX;
                // document.body.style.cursor = 'col-resize';
                // document.addEventListener('mousemove', handleResize);
                // document.addEventListener('mouseup', stopResize);
            });
        }
        
        function handleResize(e) {
            if (!isResizing) return;
            e.preventDefault();
            
            // const offsetRight = document.body.offsetWidth - (e.clientX);
            const newWidth = e.clientX;
            
            if (newWidth > 200 && newWidth < 400) {
                document.getElementById('sidebar').style.width = `${newWidth}px`;
                document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
            }
        }
        
        function stopResize() {
            isResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', handleResize);
            document.removeEventListener('mouseup', stopResize);
        }
        
        // Bottom Bar Active Item
        const bottomBarItems = document.querySelectorAll('.bottom-bar-item');
        bottomBarItems.forEach(item => {
            item.addEventListener('click', function() {
                bottomBarItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });